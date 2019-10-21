# README

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group_id
- belongs_to :user_id


## userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, primary_key: true, add_index:true|

### Association
- has_many :group_users
- has_many :group_id, through: :group_users
- has_many :images
- has_many :bodys


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|unique: true|

### Association
- has_to :group_users
- has_to :user_id, through: :group_users


## bodyテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|foreign_key: true|

### Association
- belongs_to :user_id


## imageテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|foreign_key: true|

### Association
- belongs_to :user_id

