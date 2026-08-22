import { DataKey, Role } from '../types';

describe('DataKey', () => {
  // These strings are the actual on-chain `manageData` entry names. If one of
  // these assertions ever needs "fixing", check the contract first — a silent
  // change here would orphan existing on-chain entries.
  it('builds the task key', () => {
    expect(DataKey.task(42)).toBe('task_42');
  });

  it('builds the vote key', () => {
    expect(DataKey.vote(42)).toBe('vote_42');
  });

  it('accepts bigint ids without scientific notation or precision loss', () => {
    expect(DataKey.task(9007199254740993n)).toBe('task_9007199254740993');
    expect(DataKey.vote(9007199254740993n)).toBe('vote_9007199254740993');
  });

  it('handles a zero id', () => {
    expect(DataKey.task(0)).toBe('task_0');
  });

  it('exposes the reputation key as a constant', () => {
    expect(DataKey.reputation).toBe('vero_reputation');
  });
});

describe('Role', () => {
  it('matches the contract-side role names', () => {
    expect(Role.Admin).toBe('Admin');
    expect(Role.Guardian).toBe('Guardian');
    expect(Role.TaskManager).toBe('TaskManager');
  });
});
