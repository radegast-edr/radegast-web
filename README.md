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

## Service notice

The optional site-wide warning banner is controlled only by `_data/announcement.yml`. It is disabled by default. To publish an outage notice, edit the file and deploy a new build:

```yaml
enabled: true
message: "The Radegast console is temporarily unavailable. We are working to restore service."
link_label: "Read the update"
link_url: "/blog/"
```

`message` is required when the banner is enabled. `link_label` and `link_url` are optional, but both are required to show a link. Links must be site-relative paths beginning with one slash or use HTTPS. Set `enabled: false`, then rebuild and deploy, to hide the notice again.

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
