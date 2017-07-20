class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :rest_time, :exercise_sets
  # has_one :category
end
