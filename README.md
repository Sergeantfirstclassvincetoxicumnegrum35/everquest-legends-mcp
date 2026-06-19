# EverQuest Legends MCP

Read-only Model Context Protocol server for EverQuest Legends public sources.

## Status

This project is public-ready but the repository may still be private until the owner flips GitHub visibility. It does not require secrets, cookies, credentials, or a Daybreak account.

## Scope

This MCP is for **EverQuest Legends**. It intentionally excludes general EQ1/EQ2, P99, EQEmu, Project Quarm, and other emulator/background databases unless a specific page is about EverQuest Legends.

This server is built around public, unauthenticated sources:

- EQL Wiki: `https://eqlwiki.com/Main_Page` via MediaWiki API
- Official EQL site and news: `https://www.everquestlegends.com`
- Daybreak help and press pages
- Official EverQuest community note about the Game Jawn collaboration
- Official EQL YouTube and Twitch channels
- EQL-specific guide/interview/preview pages from EQProgression, EverQuest Guides, and selected press outlets
- Pointer-only EQL community sources such as Reddit

It does not log into Daybreak, manipulate an account, automate a game client, or send requests to private APIs.

## Tools

- `eql_sources`: list configured public sources
- `eql_source_fetch`: fetch and extract a curated source page
- `eql_source_search`: search official/support/guide source pages
- `eql_wiki_search`: full-text search EQL Wiki
- `eql_wiki_page`: fetch an EQL Wiki page with extracted text, links, categories, and revision metadata
- `eql_wiki_recent_changes`: read recent wiki edits
- `eql_wiki_category_pages`: list MediaWiki category members
- `eql_official_news`: parse official EQL news index
- `eql_official_article`: fetch and extract an official news article
- `eql_press_assets`: list official Daybreak press asset URLs by kind
- `eql_official_youtube_videos`: list official EQL YouTube video metadata from the channel RSS feed
- `eql_class_combos`: generate three-class combinations from the public 16-class list

## Resources

- `eql://sources`: source registry
- `eql://classes`: class metadata
- `eql://races`: launch race list

## Local Usage

```bash
git clone https://github.com/ArtSabintsev/everquest-legends-mcp.git
cd everquest-legends-mcp
npm install
npm run build
```

For MCP clients that accept a JSON config:

```json
{
  "mcpServers": {
    "everquest-legends": {
      "command": "node",
      "args": ["/Users/arthur/Developer/everquest-legends-mcp/dist/index.js"]
    }
  }
}
```

If you are running from a different checkout path, replace the `args` path with your local `dist/index.js`.

## Development

```bash
npm run typecheck
npm test
npm run build
```

## Source Policy

- Searchable sources should be stable public text pages about EverQuest Legends.
- Official EQL, Daybreak, Game Jawn, original interviews, hands-on previews, and EQL-specific guide pages are preferred.
- Social, Discord, forum, Twitch, and YouTube watch pages are pointer-only unless there is a stable public feed or transcript.
- Daybreak Help pages are pointer-only because direct fetches can return Cloudflare challenge HTML.
- Binary assets are exposed as metadata links; they are not downloaded by default.

## Notes

The wiki and beta coverage change quickly. For current facts, prefer `eql_wiki_page`, `eql_wiki_search`, `eql_official_news`, `eql_official_youtube_videos`, and official source pages over static assumptions.

## License

MIT
