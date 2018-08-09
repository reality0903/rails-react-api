class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.integer :publication_id
      t.string :author
      t.string :title
      t.text :description
      t.string :url
      t.string :urlToImage
      t.string :publishedAt

      t.timestamps
    end
  end
end
