import {
  isFunction,
  u8aWrapBytes,
  u8aToHex,
} from "@polkadot/util";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { U8aLike } from "@polkadot/util/types";
import {TypeRegistry} from '@polkadot/types'



const Registry = new TypeRegistry();
Registry.register({
  AddProvider: {
    authorizedMsaId: "u64",
    schemaIds: "Vec<u16>",
    expiration: "u32",
  },
});


export async function signPayloadWithExtension(
  address: string,
  payload: U8aLike,
) {
  const walletAccount = await web3FromAddress(address);
  const signRaw = walletAccount.signer?.signRaw;
  let signed;
  if (signRaw && isFunction(signRaw)) {
    const payloadWrappedToU8a = u8aWrapBytes(payload);
    try {
      signed = await signRaw({
        address,
        data: u8aToHex(payloadWrappedToU8a),
        type: "bytes",
      } as any);
      return signed?.signature;
    } catch (e) {
      console.log(e);
      return "ERROR!";
    }
  }
  return "Unknown error";
}

export const payloadAddProvider = (
  expiration: number,
  providerId: string,
  schemaIds: number[],
) => {
  schemaIds.sort();
  const claimHandlePayload = Registry.createType("AddProvider", {
    authorizedMsaId: providerId,
    expiration,
    schemaIds,
  });

  return claimHandlePayload;
};

type signCiTransactionTypes = {
  accountAddress:string,
  expiration:number,
  handlePayload:U8aLike,
  providerId:string,
  providerSchemas:number[]
}

export const signCiTransaction = async ({
  accountAddress,handlePayload,expiration,providerId,providerSchemas

}:signCiTransactionTypes):Promise<{handleSignature:string,addProviderSignature:string}>=>{



  const handleSignature = await signPayloadWithExtension(
   accountAddress,
    handlePayload,
  );

  if (!handleSignature.startsWith("0x"))
    throw Error("Unable to sign: " + handleSignature);

  // Generate the delegation signature
  const addProviderPayload = payloadAddProvider(
    expiration,
    providerId,
    providerSchemas,
  );

  const addProviderSignature = await signPayloadWithExtension(
    accountAddress,
    addProviderPayload.toU8a(),
  );

  return {
    handleSignature,addProviderSignature
  }
}