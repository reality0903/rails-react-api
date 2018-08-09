class CreatePublications < ActiveRecord::Migration[5.0]
  def change
    create_table :publications do |t|
      t.string :name
      t.text :description
      t.string :url
      t.string :category
      t.string :language
      t.string :country

      t.timestamps
    end
  end
end
