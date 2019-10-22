# README

## groups_usersテーブル
|name|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|name|Type|Options|
|------|----|-------|
|name|integer|null: false, primary_key: true, add_index:true|

### Association
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :messages

## groupsテーブル
|name|Type|Options|
|------|----|-------|
|name|integer|unique:true|

### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages


## messagesテーブル
|name|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users