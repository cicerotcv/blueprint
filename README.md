# Blueprint

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/testing-jest-%23C21325?logo=jest&logoColor=white)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/cicerotcv/blueprint)](https://github.com/cicerotcv/blueprint/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/cicerotcv/blueprint)](https://github.com/cicerotcv/blueprint/issues)
[![GitHub stars](https://img.shields.io/github/stars/cicerotcv/blueprint)](https://github.com/cicerotcv/blueprint/stargazers)


Blueprint is a versatile random data generator inspired by the simplicity and power of Zod. With Blueprint, you can effortlessly create mock data for your applications, tests, or any other use case where realistic yet customizable data is needed.

## Features

**Easy-to-use syntax:** Define your data structures with a simple and intuitive syntax, making it easy to generate data according to your specifications.

**Flexible customization:** Tailor your data generation with a wide range of options, including data types, constraints, and relationships between data fields.

**Built-in data types:** Blueprint supports a variety of common data types such as strings, numbers, dates, and more, allowing you to generate diverse datasets.

**Extensible:** Extend Blueprint with custom data types and generators to suit your specific requirements.


## Installation
You can install Blueprint via `npm`:

~~~bash
npm install --save-dev @cicerotcv/blueprint
~~~

Using `yarn`

~~~bash
yarn add -D @cicerotcv/blueprint
~~~

Or `pnpm`

~~~bash
pnpm add -D @cicerotcv/blueprint
~~~

## Usage

~~~typescript
import { b } from '@cicerotcv/blueprint';

const objectSchema = b.schema({
  age: b.integer.between({
    min: 0,
    max: 10,
  }),
});

const array = b.array({
  length: 3,
  schema: objectSchema,
});

console.log(array.generate());
// [{ age: 2 }, { age: 3 }, { age: 5 }]
~~~

## Contributing
Contributions are welcome! Please see our contribution guidelines for more information on how to get involved.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments
Blueprint draws inspiration from Zod. We are grateful to the contributors of Zod for their fantastic work.