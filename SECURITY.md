# Security Policy

## Supported Versions

This package is pre-1.0. Security fixes land on the latest minor release only.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Report them privately through
[GitHub's private vulnerability reporting](https://github.com/Vero-protocol/vero-sdk/security/advisories/new)
on this repository. That keeps the details out of public view until a fix is
available.

Please include, where you can:

- The type of issue and which module is affected
- Steps to reproduce, or a proof-of-concept
- The impact — what an attacker could actually do with it

We aim to acknowledge reports within 72 hours.

## Scope

This SDK sits on the path between the Vero Protocol applications and the Stellar
network. Findings in these areas are especially valuable:

- **Endpoint validation** (`src/network/`) — anything that lets a caller point
  the client at an untrusted RPC or Horizon endpoint, or bypass the HTTPS
  requirement
- **Request construction** (`src/rpc/`) — anything that lets a crafted path or
  parameter escape the intended endpoint origin
- **Transaction building and signing** — anything that could cause a user or
  service to sign something other than what was intended
- **Sequence/nonce handling** — anything enabling replay, or reuse of a
  consumed sequence number

## Out of Scope

- Vulnerabilities in Stellar Horizon, Soroban RPC, or `@stellar/stellar-sdk`
  itself — report those upstream
- Findings that require a already-compromised machine or wallet
- Missing hardening headers on documentation pages
