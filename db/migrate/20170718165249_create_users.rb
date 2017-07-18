class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :age
      t.float :weight
      t.float :height
      t.string :gender
      t.float :body_fat
      t.float :bmr
      t.boolean :smoker
      t.boolean :drinker
      t.boolean :vegetarian
      t.string :profile_image

      t.timestamps
    end
  end
end
