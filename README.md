# file-character-countrrr

Count characters in a string with Unicode support.

## Installation

```bash
npm install file-character-countrrr
```

## Usage

```js
import countCharacters from "file-character-countrrr";

countCharacters("Hello, world!"); // 13
countCharacters("hello world", { ignoreSpaces: true }); // 10
countCharacters("hello \nworld", { ignoreWhitespace: true }); // 10
```

The package also exports a named function:

```js
import { countCharacters } from "file-character-countrrr";
```

`countCharacters` throws a `TypeError` when the input is not a string. It counts
Unicode code points, so an emoji such as `🌍` counts as one character.

## API

### `countCharacters(text, options?)`

- `text` (`string`) — text to count.
- `options.ignoreSpaces` (`boolean`) — exclude regular spaces.
- `options.ignoreWhitespace` (`boolean`) — exclude all whitespace characters.

## License

MIT