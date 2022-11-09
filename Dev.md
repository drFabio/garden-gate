## setting up supabase cli

```sh

 yarn add @supabase/supabase-js
 yarn supabase init
 yarn supabase start
 yarn supabase gen types typescript --db-url $SUPA_DB_URL > utils/database.types.ts
```

## doc improvement

How to generate the database , fix on doc

## Supabase redirect

In order to make the redirect work on local and on remote we needed to [follow](https://www.notion.so/drfabio/Technology-c3a04e2a06204d2e84684f35cdbc9ce7?p=15ac3fef1dbe47c8bc1df011a02e20ae&showMoveTo=true). Adding redirect url to the authentication on the [dashboard](https://app.supabase.com/project/hvdvnzdakxyzwjjsqxzw/auth/url-configuration) and possibly to the TOML (not entirely sure).
