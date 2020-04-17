# Insomnia Disable Cookies

![Npm Version](https://img.shields.io/npm/v/insomnia-plugin-disable-cookies.svg)
![Publish to NPM Registry](https://github.com/seanghay/insomnia-plugin-disable-cookies/workflows/Publish%20to%20NPM%20Registry/badge.svg)

This is a plugin for [Insomnia](https://insomnia.rest) that allows users to disable sending cookies for requests.

## Installation

Install the `insomnia-plugin-disable-cookies` plugin from Preferences > Plugins.

## Usage

Cookies will not be sent by setting a `DISABLE_COOKIES` to `true` in environment variable.

```json
{
	"DISABLE_COOKIES": true
}
```
