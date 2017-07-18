class User < ApplicationRecord
  has_many :routines
  has_many :workouts
  has_many :notes, through: :workouts
end
