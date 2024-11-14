import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Mint as MintEvent,
  OwnershipTransferred,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Transfer,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent,
  WhitelistMint as WhitelistMintEvent
} from "../generated/Koalas/Koalas"
import {
  Mint,
  WhitelistMint,
} from "../generated/schema"

export function handleMint(event: MintEvent): void {
  let entity = Mint.load(getHexStringFromEventParams(event.params.amount));
  if (!entity) {
    entity = new Mint(getHexStringFromEventParams(event.params.amount));
    entity.to = event.params.to;
    entity.amount = event.params.amount;
    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;
  }
  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
}

export function handlePaused(event: PausedEvent): void {
}

export function handleUnpaused(event: UnpausedEvent): void {
}

export function handleApproval(event: ApprovalEvent): void {
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
}

export function handleWhitelistMint(event: WhitelistMintEvent): void {
  let entity = WhitelistMint.load(getHexStringFromEventParams(event.params.amount));
  if (!entity) {
    entity = new WhitelistMint(getHexStringFromEventParams(event.params.amount));
    entity.to = event.params.to;
    entity.amount = event.params.amount;
    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;
  }
  entity.save();
}

function getHexStringFromEventParams(tokenId: BigInt): string {
  return tokenId.toHexString();
}