class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :start_time, :end_time
  has_many :exercises

  def ordered_exercises
    object.exercises.order("created_at")
  end
end
