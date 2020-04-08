---
id: config
title: Configuration
---

## PHP Plugin
For WordPress instructions see [here](#wordpress)

I suggest you to follow the examples in the example folder along with
the following steps. Method documentation is inside the `src/Flarum.php`
class.

Basically, you need to do this:
1. Create a Flarum object with your configuration. See [here](#settings)
   for parameters explanation. Do your action (login, logout or delete).
   There is a method in this lib for any of these actions.
3. (OPTIONAL) Redirect to Flarum with the `redirectToFlarum` method

## WordPress
You can open settings of the plugin from the Settings --> Flarum SSO
plugin menu. See below for help about settings.

## Settings
Here are explained settings of the plugin. These must be set when an
object is created or, in case of WP plugin, in the plugin settings page.
- **Enable SSO (WP ONLY)**: Mark this checkbox to enable SSO
- **Flarum URL**: This is the URL of your Flarum public folder (the URL
  where you can see your Flarum)
- **Root domain**: The domain of the root website (the SSO one, see
  below for exceptions. This setting is already precompiled in the WP
  plugin)
- **API Key**: The API key you have added in
  [pre-installation steps](install). **Password Token**: Just a random
  string to encrypt Flarum passwords (you can use
  [this tool](https://onlinerandomtools.com/generate-random-string) to
  generate one)
- **Token lifetime**: Optional. This is set by default to 14. It
  indicates the token/cookie expiration.
- **PRO features key (ONLY WP)**: Enable PRO features by entering here
  your PayPal payment transaction ID. Check [here](pro) for more info
  about PRO features.
- **Insecure mode**: Optional. This is set by default to false. Enable
  this ONLY if you don't have an SSL certificate or you're developing on
  your local server such as XAMPP

## Exceptions
If you have an SSO system built at `account.example.com` (so in a
subdomain) and your Flarum installation at `forum.example.com` (so
another subdomain) you must set the `root_domain` option to
`example.com` (the **root domain**, not the subdomain
`account.example.com`) While this is possible, it's not possible to get
this extension working on two different domains (`example.com`,
`example2.com`) due to cookies limitation
([see here for more info](https://stackoverflow.com/a/6761443))
