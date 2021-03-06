class CreateWorkouts < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|
      t.string :name
      # t.belongs_to :routine, foreign_key: true
      t.date :date
      t.time :start_time
      t.time :end_time
      t.integer :user_id

      t.timestamps
    end
  end
end
