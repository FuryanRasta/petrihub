# Upgrade

This module provides the basic functions of software version upgrade.

## Available Commands

| Name                                                                            | Description                                           |
| ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [software-upgrade](#petri-tx-gov-submit-proposal-software-upgrade)               | Submit a software upgrade proposal                    |
| [cancel-software-upgrade](#petri-tx-gov-submit-proposal-cancel-software-upgrade) | Cancel the current upgrade proposal                   |
| [plan](#petri-query-upgrade-plan)                                                | Query the software upgrade plan currently in progress |
| [applied](#petri-query-upgrade-applied)                                          | Query the executed software upgrade plan              |

## petri tx gov submit-proposal software-upgrade

Initiate a software upgrade proposal through the `Gov` module.

```bash
petri tx gov submit-proposal software-upgrade <plan-name> [flags]
```

**Flags:**

| Name, shorthand  | Type   | Required | Default | Description                                                                                                            |
| ---------------- | ------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| --deposit        | Coins  |          |         | deposit of proposal                                                                                                    |
| --title          | string |          |         | title of proposal                                                                                                      |
| --description    | string |          |         | description of proposal                                                                                                |
| --upgrade-height | uint64 |          |         | The height at which the upgrade must happen (not to be used together with `--upgrade-time`)                            |
| --upgrade-time   | Time   |          |         | The time at which the upgrade must happen (ex. 2006-01-02T15:04:05Z) (not to be used together with `--upgrade-height`) |
| --upgrade-info   | string |          |         | Optional info for the planned upgrade such as commit hash, etc.                                                        |

:::tip
If you need to support [cosmovisor](#https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor) to automatically perform software upgrades, `--upgrade-info` needs to use a fixed format, such as:

```json
{
    "binaries": {
        "linux/amd64":"https://example.com/petrihub.zip?checksum=sha256:aec070645fe53ee3b3763059376134f058cc337247c978add178b6ccdfb0019f"
    }
}
```

:::

## petri tx gov submit-proposal cancel-software-upgrade

Submit cancellation of the currently ongoing software upgrade proposal through the `Gov` module.

```bash
petri tx gov submit-proposal cancel-software-upgrade [flags]
```

**Flags:**

| Name, shorthand | Type   | Required | Default | Description             |
| --------------- | ------ | -------- | ------- | ----------------------- |
| --deposit       | Coins  |          |         | deposit of proposal     |
| --title         | string |          |         | title of proposal       |
| --description   | string |          |         | description of proposal |

## petri query upgrade plan

Query the currently ongoing software upgrade plan.

```bash
petri query upgrade plan [flags]
```

## petri query upgrade applied

Query the software upgrade plan that has been executed recently.

```bash
petri query upgrade applied <upgrade-name>
```
