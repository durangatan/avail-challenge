class CreateApplicationProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :application_properties do |t|
      t.string :form_type
      t.string :theme_color_hex

      t.timestamps
    end
  end
end
