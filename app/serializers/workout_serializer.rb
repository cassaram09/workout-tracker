class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :start_time, :end_time, :exercises
  # has_one :routine
end
