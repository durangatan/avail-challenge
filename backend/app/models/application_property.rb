class ApplicationProperty < ApplicationRecord
	validates :theme_color_hex, format: {with:/#(?:[0-9a-fA-F]{3}){1,2}/, message:"%{value} is not a valid color hex"
}
	validates :form_type, inclusion: { in: %w(Basic Full),
message: "%{value} is not a valid form type" }
end
