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
|name|character|null: false, primary_key: true, add_index:true, foreign_key: true|

### Association
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :messages

## groupsテーブル
|name|Type|Options|
|------|----|-------|
|name|character|unique:true, null:fulse, foreign_key: true|

### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages


## messagesテーブル
|name|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false,foreign_key: true|
|user_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user