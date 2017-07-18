class Workout < ApplicationRecord
  belongs_to :routine
  has_many :exercises
end
