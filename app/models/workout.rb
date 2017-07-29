class Workout < ApplicationRecord
  belongs_to :routine
  has_many :exercises
  belongs_to :user

   accepts_nested_attributes_for :exercises
end
