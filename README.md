# Radegast EDR — Website

Intro site for [Radegast EDR](https://radegast.app).

Hosted on Cloudflare Pages. Built with [Jekyll](https://jekyllrb.com/).

## Pages

| Path | Description |
|------|-------------|
| `/` | Landing page — hero, features overview, how it works |
| `/features/` | Full feature breakdown |
| `/team/` | Team members |
| `/opensource/` | Open source & contributing |
| `/blog/` | Blog post listing |
| `/contact/` | Contact & security disclosure |
| `/rss.xml` | RSS feed |
| `/.well-known/security.txt` | RFC 9116 security contact |

## Local development

Requires Ruby with Jekyll 4.3+ installed.

### Build

```sh
./build.sh
# or without Bundler (system Jekyll):
JEKYLL_NO_BUNDLER_REQUIRE=1 jekyll build
```

Output is written to `_site/`.

### Serve (live reload)

```sh
./serve.sh
# or without Bundler:
JEKYLL_NO_BUNDLER_REQUIRE=1 jekyll serve --livereload
```

Site is served at <http://localhost:4000>.

### Install dependencies (first time)

```sh
bundle config set --local path '~/.gem'
bundle install
```

## Deployment

Cloudflare Pages build settings:

| Setting | Value |
|---------|-------|
| Build command | `bundle exec jekyll build` |
| Output directory | `_site` |
