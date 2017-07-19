class Exercise < ApplicationRecord
  belongs_to :exercise_category
  belongs_to :workout
end
