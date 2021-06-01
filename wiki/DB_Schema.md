## `users`
| column name   | data type     | details               |
| ------------- | ------------- | --------------------  |
| `id` | integer | not null, primary key |
| `email` | string | not null, unique |
| `username ` | string | not null, unique |
| `hashedPassword` | string | not null, unique |
| `profilePicUrl` | string | optional |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |


## `sounds`
| column name   | data type     | details               |
| ------------- | ------------- | --------------------  |
| `id` | integer | not null, primary key |
| `title` | string | not null |
| `description` | text | optional |
| `audioUrl` | string | not null
| `uploaderId` | integer | not null, foreign key |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |
* `uploaderId` references `users`


## `favorites`
| column name   | data type     | details               |
| ------------- | ------------- | --------------------  |
| `id` | integer | not null, primary key |
| `userLikeId` | integer | not null, foreign key |
| `soundLikeId` | integer | not null, foreign key |
| `created_at` | datetime | not null|
| `updated_at` | datetime | not null |
* `userLikeId` references `users`
* `soundLikeId` references `sounds`
