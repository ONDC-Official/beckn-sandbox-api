# Beckn Sandbox

## Introduction

### Overview

A sandbox environment typically replicates the necessary components of the production system but operates independently. It may include a separate server, database, network, and other resources. By isolating the sandbox environment from the production system, any errors, bugs, or vulnerabilities discovered during testing can be addressed without affecting live users or critical data.

## Current Version

1.0.0

## Features

1. This sandbox currently using only mock responses.

## Upcoming Features

1. Responses that have a correlation to the request.

## Installation Guide

### Step 1: Installation of Sandbox Code

1. Clone the repo

```bash
git clone https://github.com/beckn/beckn-sandbox.git
```

2. Go the project directory

```bash
cd beckn-sandbox
```

3. Install the packages

```bash
npm i
```

4. Configure the port number in `src/main.ts` file. This is optional

5. Run the sandbox server in watch mode

```bash
# watch mode
npm run start:dev
```

### Step 2: Installation of Sandbox Webhook Code

Please follow the [README.md](https://github.com/beckn/beckn-sandbox-webhook/blob/main/README.md) to configure and install the Sandbox webhook code.

### Step 3: Installation, Configuration and Registry of BAP and BPP protocol servers

Please follow the setup instructions at [setup.md](https://github.com/beckn/protocol-server/blob/v2-0.9.4-fix/setup.md) of protocol server.

## User Guide

Please follow the user guide at [USER_GUIDE.md](./USER_GUIDE.md).

## Troubleshoot Guide

Please follow the toubleshoot guide at [TROUBLESHOOT_GUIDE.md](./TROUBLESHOOT_GUIDE.md).
