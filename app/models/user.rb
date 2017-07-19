class User < ApplicationRecord
  has_many :routines
  has_many :workouts
  has_many :notes, through: :workouts

  has_secure_password
  validates :email, uniqueness: true, presence: true
  validates :password, :password_confirmation, presence: true
end
