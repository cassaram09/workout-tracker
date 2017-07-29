class Workout < ApplicationRecord
  belongs_to :routine
  has_many :exercises
  belongs_to :user

  accepts_nested_attributes_for :exercises, allow_destroy: true

  def date=(val)
    date = Time.at(val)
    write_attribute(:date, date)
  end

  def start_time=(val)
    time = Time.at(val)
    write_attribute(:start_time, time)
  end

  def end_time=(val)
    time = Time.at(val)
    write_attribute(:end_time, time)
  end

end
