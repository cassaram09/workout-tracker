class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :start_time, :end_time
  has_one :routine
end
