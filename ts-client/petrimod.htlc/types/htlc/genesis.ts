/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { AssetSupply, HTLC, Params } from "./htlc";

export const protobufPackage = "petrimod.htlc";

/** GenesisState defines the HTLC module's genesis state */
export interface GenesisState {
  params: Params | undefined;
  htlcs: HTLC[];
  supplies: AssetSupply[];
  previousBlockTime: Date | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, htlcs: [], supplies: [], previousBlockTime: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.htlcs) {
      HTLC.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supplies) {
      AssetSupply.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.previousBlockTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.htlcs.push(HTLC.decode(reader, reader.uint32()));
          break;
        case 3:
          message.supplies.push(AssetSupply.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      htlcs: Array.isArray(object?.htlcs) ? object.htlcs.map((e: any) => HTLC.fromJSON(e)) : [],
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => AssetSupply.fromJSON(e)) : [],
      previousBlockTime: isSet(object.previousBlockTime) ? fromJsonTimestamp(object.previousBlockTime) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.htlcs) {
      obj.htlcs = message.htlcs.map((e) => e ? HTLC.toJSON(e) : undefined);
    } else {
      obj.htlcs = [];
    }
    if (message.supplies) {
      obj.supplies = message.supplies.map((e) => e ? AssetSupply.toJSON(e) : undefined);
    } else {
      obj.supplies = [];
    }
    message.previousBlockTime !== undefined && (obj.previousBlockTime = message.previousBlockTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.htlcs = object.htlcs?.map((e) => HTLC.fromPartial(e)) || [];
    message.supplies = object.supplies?.map((e) => AssetSupply.fromPartial(e)) || [];
    message.previousBlockTime = object.previousBlockTime ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
