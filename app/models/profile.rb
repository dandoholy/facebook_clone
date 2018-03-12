class Profile < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
    foreign_key: :user_id
  belongs_to :profile_pic,
    foreign_key: :profile_pic_id,
    optional: true
  belongs_to :banner_pic,
    foreign_key: :banner_pic_id,
    optional: true
  has_many :posts,
    class_name: :posts,
    foreign_key: :wall_id


end
