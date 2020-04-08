---
id: install
title: Installation
---

## Requirements
- PHP 7.0+
- [Flarum SSO Extension](https://github.com/maicol07/flarum-ext-sso) installed on your Flarum

## Pre-installation

You need to create a random token (for security purposes it is better if
this is long 40 characters, you can use
[this tool](https://onlinerandomtools.com/generate-random-string) to
make one) and put it into the `api_keys` table of your Flarum database.
You only need to set the `key` column and the `user_id` one. In the
first one write your new generated token and in the latter your admin
user id.

## Installation
See [here](#wordpress) for Wordpress instructions

I'd recommend to use composer [(?)](https://github.com/delight-im/Knowledge/blob/master/Composer%20(PHP).md) to install the plugin.
Execute this command to install this with composer. You need to have [composer](https://getcomposer.org) installed.
```
composer require maicol07/flarum-sso-plugin
```
You can also install this by downloading the entire package but then it would be difficult to maintain it.

## Wordpress
Before the following steps, be sure to have done pre-installation steps.
### Automatic installation
**NOT AVAILABLE YET!!**

You can find the plugin in the WordPress plugin Directory. So you can
download it from your WP site in Plugins --> Add new.

### Manual installation
1. Download the `wp` folder you can find inside the `sample-website`
   folder into the plugin folder (`/wp-content/plugins/`) of your
   WordPress instance.
2. Rename it to a name of your choice (e.g. `flarum-sso-extension`).
3. You have to install the dependencies with Composer
   [(?)](https://github.com/delight-im/Knowledge/blob/master/Composer%20(PHP).md).
   So execute this command on your server (you can also do this on your
   local machine before uploading to the server):
    ```
    composer install
    ```
4. Upload the compiled plugin to your WordPress plugin
5. Activate the plugin from the Plugins menu.
