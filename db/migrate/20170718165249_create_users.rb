class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :age
      t.integer :weight
      t.integer :height
      t.string :gender
      t.integer :body_fat
      t.integer :bmr
      t.boolean :smoker
      t.boolean :drinker
      t.boolean :vegetarian
      t.string :profile_image

      t.timestamps
    end
  end
end
