# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-06-19

First stable release.

### Added

- `eql_video_transcript` tool — fetch a YouTube video's transcript from its
  published captions (manual or auto-generated). Accepts video ids and `watch`,
  `youtu.be`, `shorts`, `embed`, and `live` URLs. Twitch URLs return a clear
  "not available" result because Twitch VODs do not expose retrievable captions.
- yt-dlp helper resolution for caption retrieval, required because YouTube now
  gates caption downloads behind a bot-check token that plain HTTP cannot
  satisfy. Resolution order: `YTDLP_PATH`, then a `yt-dlp` on `PATH`, then a
  server-managed copy. When none exists, the tool asks the caller to opt in
  (`installYtDlp: true`, or `EQL_YTDLP_AUTODOWNLOAD=1` for standing consent)
  before downloading the official standalone binary, which is verified against
  the release's published SHA-256 checksum, cached, and refreshed after 7 days.
  Captions only — no video or audio is downloaded.
- `youtube`, `transcript`, `captions`, and `yt-dlp` package keywords.

### Notes

- No new npm dependencies. `yt-dlp` is an optional, server-managed runtime
  binary; every other tool works without it and requires no setup.
- Concurrent identical transcript requests are de-duplicated, and a single
  yt-dlp download is shared across callers.

[1.0.0]: https://github.com/ArtSabintsev/everquest-legends-mcp/releases/tag/v1.0.0
