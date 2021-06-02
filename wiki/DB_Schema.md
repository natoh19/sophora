## `users`
| column name      | data type     | details              |
| -------------    | ------------- | -------------------- |
| `id`             | integer       | not null, primary key|
| `first_name`     | string        |                      |
| `last_name`      | string        |                      |
| `email`          | string        | not null, unique     |
| `hashedPassword` | string        | not null             |
| `created_at`     | timestamp     | not null             |



## `orders`
| column name   | data type     | details                 |
| ------------- | ------------- | ----------------------- |
| `id`          | integer       | not null, primary key   |
| `user_id`     | integer       | not null, foreign key   |
| `product_id`  | integer       | not null, foreign key   |                  |
| `status`      | boolean       |                         |
| `total`       | integer       | numeric                 |
| `created_at`  | timestamp     |                         |

* `user_id` references `users`
* `product_id` references `products`


## `loves`
| column name   | data type     | details               |
| ------------- | ------------- | ----------------------|
| `id`          | integer       | primary key           |
| `product_id`  | integer       | not null, foreign key |
| `user_id`     | integer       | not null, foreign key |
| `created_at`  | timestamp     |                       |

* `product_id` references `products`
* `user_id` references `users`

## `products`
| column name   | data type     | details               |
| ------------- | ------------- | ----------------------|
| `id`          | integer       | primary key           |
| `sku`         | string        |                       |
| `product_name`| string        |                       |
| `categoryId`  | integer       | not null, foreign key |
| `description` | text          |                       |
| `price`       | numeric       |                       |
| `quantity`    | integer       |                       |
| `created_at`  | timestamp     |                       |


* `categoryId` references `categories`

## `reviews`
| column name   | data type     | details               |
| ------------- | ------------- | ----------------------|
| `id`          | integer       | primary key           |
| `content`     | text          |                       |
| `product_id`  | integer       | not null, foreign key |
| `user_id`     | integer       | not null, foreign key |
| `rating`      | integer       |                       |
| `recommend`   | boolean       |                       |
| `quantity`    | integer       |                       |
| `created_at`  | timestamp     |                       |


* `product_id` references `products`
* `user_id` references `users`
