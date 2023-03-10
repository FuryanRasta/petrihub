// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgBurnToken } from "./types/token/tx";
import { MsgIssueToken } from "./types/token/tx";
import { MsgEditToken } from "./types/token/tx";
import { MsgMintToken } from "./types/token/tx";
import { MsgTransferTokenOwner } from "./types/token/tx";

import { Token as typeToken} from "./types"
import { Params as typeParams} from "./types"

export { MsgBurnToken, MsgIssueToken, MsgEditToken, MsgMintToken, MsgTransferTokenOwner };

type sendMsgBurnTokenParams = {
  value: MsgBurnToken,
  fee?: StdFee,
  memo?: string
};

type sendMsgIssueTokenParams = {
  value: MsgIssueToken,
  fee?: StdFee,
  memo?: string
};

type sendMsgEditTokenParams = {
  value: MsgEditToken,
  fee?: StdFee,
  memo?: string
};

type sendMsgMintTokenParams = {
  value: MsgMintToken,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferTokenOwnerParams = {
  value: MsgTransferTokenOwner,
  fee?: StdFee,
  memo?: string
};


type msgBurnTokenParams = {
  value: MsgBurnToken,
};

type msgIssueTokenParams = {
  value: MsgIssueToken,
};

type msgEditTokenParams = {
  value: MsgEditToken,
};

type msgMintTokenParams = {
  value: MsgMintToken,
};

type msgTransferTokenOwnerParams = {
  value: MsgTransferTokenOwner,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgBurnToken({ value, fee, memo }: sendMsgBurnTokenParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBurnToken: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBurnToken({ value: MsgBurnToken.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBurnToken: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIssueToken({ value, fee, memo }: sendMsgIssueTokenParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIssueToken: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIssueToken({ value: MsgIssueToken.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIssueToken: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgEditToken({ value, fee, memo }: sendMsgEditTokenParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEditToken: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEditToken({ value: MsgEditToken.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEditToken: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgMintToken({ value, fee, memo }: sendMsgMintTokenParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMintToken: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMintToken({ value: MsgMintToken.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMintToken: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransferTokenOwner({ value, fee, memo }: sendMsgTransferTokenOwnerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferTokenOwner: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgTransferTokenOwner({ value: MsgTransferTokenOwner.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferTokenOwner: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgBurnToken({ value }: msgBurnTokenParams): EncodeObject {
			try {
				return { typeUrl: "/petrimod.token.MsgBurnToken", value: MsgBurnToken.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBurnToken: Could not create message: ' + e.message)
			}
		},
		
		msgIssueToken({ value }: msgIssueTokenParams): EncodeObject {
			try {
				return { typeUrl: "/petrimod.token.MsgIssueToken", value: MsgIssueToken.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIssueToken: Could not create message: ' + e.message)
			}
		},
		
		msgEditToken({ value }: msgEditTokenParams): EncodeObject {
			try {
				return { typeUrl: "/petrimod.token.MsgEditToken", value: MsgEditToken.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEditToken: Could not create message: ' + e.message)
			}
		},
		
		msgMintToken({ value }: msgMintTokenParams): EncodeObject {
			try {
				return { typeUrl: "/petrimod.token.MsgMintToken", value: MsgMintToken.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMintToken: Could not create message: ' + e.message)
			}
		},
		
		msgTransferTokenOwner({ value }: msgTransferTokenOwnerParams): EncodeObject {
			try {
				return { typeUrl: "/petrimod.token.MsgTransferTokenOwner", value: MsgTransferTokenOwner.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferTokenOwner: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Token: getStructure(typeToken.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			PetrimodToken: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;