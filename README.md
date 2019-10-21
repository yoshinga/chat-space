# README

## groups_usersテーブル
|name|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## userテーブル
|name|Type|Options|
|------|----|-------|
|user|integer|null: false, primary_key: true, add_index:true|

### Association
- has_many :group_users
- has_many :groups, through: :group_users


## groupテーブル
|name|Type|Options|
|------|----|-------|

### Association
- has_many :group_users
- has_many :users, through: :group_users





## messageテーブル
|name|Type|Options|
|------|----|-------|
|body|text|foreign_key: true|
|image|string|foreign_key: true|

### Association
- has_many :group_users
- has_many :groups, through: :group_users