class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :rest_time
      t.belongs_to :exercise_category, foreign_key: true

      t.timestamps
    end
  end
end
