# Deco Live Template

Welcome to your live site!

First, create an `.env` file with the `SITE` variable with the name of this github repo.

```sh
site=mysitename
```

**IMPORTANT:** Your site should match the repository name in [github.com/deco-pages](https://github.com/deco-pages).

## Usage

Start the project:

```sh
deno task start
```

Go to [https://localhost:8080/start](https://localhost:8080/start)

This is a static route defined in `routes/start.tsx`. Editing the file will live reload the page.

Now go to [https://localhost:8080](https://localhost:8080)

If this is a brand new site, you should see the "Create new page" button. This happens because you are in a development host (localhost) and there is no page currently at `/`. (In production, there should be a 404 error — check it out yourself in [https://site.deco.page/](https://my-sites.deco.page/)).

To create a new page, click the button.

Now you have entered the edit mode for the new page `/`. You can add new components and edit their content and props.

You can also go into sandbox mode. Just go to [https://localhost:8080/sandbox/ComponentName](https://localhost:8080/sandbox/ComponentName) and you will have a live playground for that component with an live in-memory props editor.
