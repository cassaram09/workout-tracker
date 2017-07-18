class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :rest_time
  # has_one :category
end
