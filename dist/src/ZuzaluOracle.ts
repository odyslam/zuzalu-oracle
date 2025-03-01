/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ZuzaluOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "$organizersToDepth"
      | "$participantsToDepth"
      | "$residentsToDepth"
      | "$visitorsToDepth"
      | "VERIFIER"
      | "getLastDepths"
      | "getLastRoot"
      | "getLastRoots"
      | "owner"
      | "transferOwnership"
      | "updateGroups"
      | "verify(uint256,uint256,uint256,uint256[8],uint256,uint8)"
      | "verify(uint256,uint256,uint256,uint256[8],uint8)"
      | "verifyUnsafe"
      | "version"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred" | "UpdateGroups" | "Verify"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "$organizersToDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "$participantsToDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "$residentsToDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "$visitorsToDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "VERIFIER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getLastDepths",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoots",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGroups",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verify(uint256,uint256,uint256,uint256[8],uint256,uint8)",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verify(uint256,uint256,uint256,uint256[8],uint8)",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyUnsafe",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "$organizersToDepth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "$participantsToDepth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "$residentsToDepth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "$visitorsToDepth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERIFIER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLastDepths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGroups",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verify(uint256,uint256,uint256,uint256[8],uint256,uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verify(uint256,uint256,uint256,uint256[8],uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [user: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [user: string, newOwner: string];
  export interface OutputObject {
    user: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateGroupsEvent {
  export type InputTuple = [
    roots: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    depths: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ];
  export type OutputTuple = [
    roots: [bigint, bigint, bigint, bigint],
    depths: [bigint, bigint, bigint, bigint]
  ];
  export interface OutputObject {
    roots: [bigint, bigint, bigint, bigint];
    depths: [bigint, bigint, bigint, bigint];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VerifyEvent {
  export type InputTuple = [
    signal: BigNumberish,
    root: BigNumberish,
    _group: BigNumberish
  ];
  export type OutputTuple = [signal: bigint, root: bigint, _group: bigint];
  export interface OutputObject {
    signal: bigint;
    root: bigint;
    _group: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZuzaluOracle extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: ZuzaluOracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  $organizersToDepth: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  $participantsToDepth: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  $residentsToDepth: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  $visitorsToDepth: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  VERIFIER: TypedContractMethod<[], [string], "view">;

  getLastDepths: TypedContractMethod<
    [],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;

  getLastRoot: TypedContractMethod<[_group: BigNumberish], [bigint], "view">;

  getLastRoots: TypedContractMethod<
    [],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateGroups: TypedContractMethod<
    [
      _roots: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      _depths: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ],
    [void],
    "nonpayable"
  >;

  "verify(uint256,uint256,uint256,uint256[8],uint256,uint8)": TypedContractMethod<
    [
      _nullifierHash: BigNumberish,
      _signal: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: BigNumberish[],
      _historicRootIndex: BigNumberish,
      _group: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  "verify(uint256,uint256,uint256,uint256[8],uint8)": TypedContractMethod<
    [
      _nullifierHash: BigNumberish,
      _signal: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: BigNumberish[],
      _group: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  verifyUnsafe: TypedContractMethod<
    [
      _root: BigNumberish,
      _depth: BigNumberish,
      _nullifierHash: BigNumberish,
      _signal: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: BigNumberish[]
    ],
    [boolean],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "$organizersToDepth"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "$participantsToDepth"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "$residentsToDepth"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "$visitorsToDepth"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "VERIFIER"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getLastDepths"
  ): TypedContractMethod<[], [[bigint, bigint, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "getLastRoot"
  ): TypedContractMethod<[_group: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastRoots"
  ): TypedContractMethod<[], [[bigint, bigint, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateGroups"
  ): TypedContractMethod<
    [
      _roots: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      _depths: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verify(uint256,uint256,uint256,uint256[8],uint256,uint8)"
  ): TypedContractMethod<
    [
      _nullifierHash: BigNumberish,
      _signal: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: BigNumberish[],
      _historicRootIndex: BigNumberish,
      _group: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verify(uint256,uint256,uint256,uint256[8],uint8)"
  ): TypedContractMethod<
    [
      _nullifierHash: BigNumberish,
      _signal: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: BigNumberish[],
      _group: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verifyUnsafe"
  ): TypedContractMethod<
    [
      _root: BigNumberish,
      _depth: BigNumberish,
      _nullifierHash: BigNumberish,
      _signal: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: BigNumberish[]
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "UpdateGroups"
  ): TypedContractEvent<
    UpdateGroupsEvent.InputTuple,
    UpdateGroupsEvent.OutputTuple,
    UpdateGroupsEvent.OutputObject
  >;
  getEvent(
    key: "Verify"
  ): TypedContractEvent<
    VerifyEvent.InputTuple,
    VerifyEvent.OutputTuple,
    VerifyEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "UpdateGroups(uint256[4],uint256[4])": TypedContractEvent<
      UpdateGroupsEvent.InputTuple,
      UpdateGroupsEvent.OutputTuple,
      UpdateGroupsEvent.OutputObject
    >;
    UpdateGroups: TypedContractEvent<
      UpdateGroupsEvent.InputTuple,
      UpdateGroupsEvent.OutputTuple,
      UpdateGroupsEvent.OutputObject
    >;

    "Verify(uint256,uint256,uint8)": TypedContractEvent<
      VerifyEvent.InputTuple,
      VerifyEvent.OutputTuple,
      VerifyEvent.OutputObject
    >;
    Verify: TypedContractEvent<
      VerifyEvent.InputTuple,
      VerifyEvent.OutputTuple,
      VerifyEvent.OutputObject
    >;
  };
}
