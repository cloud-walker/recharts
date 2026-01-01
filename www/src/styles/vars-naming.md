# Theme variable naming conventions

Example `--color-text-[tone]-{level}`

`[something]` means that this part of the variable can be omitted, because has a default value.

`{something}` means that this part of the variable is required.

## Common unions

- category: surface, text, border, ...
- tone: neutral (default), brand, ...
- level: 1, 2, 3 (representing the level of contrast or emphasis)

## Surface

This group of variables is meant for surface background primarily.

- `--color-surface-{elevation}`: base, raised

## Text

This group of variables is meant for text & foreground stuff, like icons.

- `--color-text-[tone]-{level}`
