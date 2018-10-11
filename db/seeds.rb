# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
include Faker

User.destroy_all
Room.destroy_all
Message.destroy_all
RoomMembership.destroy_all


USER_HASH = Hash.new { |h,k| h[k] = {} }

DemoUser = User.create(username: 'Guest', email: 'GuestEmail@guestemail.com', password: 'guestpassword')


GeneralChannel = Room.create(id: 1, title: 'general', owner_id: DemoUser.id, is_private: false)
WorkChannel = Room.create(title: 'marketing', owner_id:  DemoUser.id, is_private: false)
HumorChannel = Room.create(title: 'watercooler', owner_id:  DemoUser.id, is_private: true)
DesignChannel = Room.create(title: 'graphicdesign', owner_id:  DemoUser.id, is_private: false)
SalesChannel = Room.create(title: 'sales', owner_id:  DemoUser.id, is_private: false)

GeneralMembership = RoomMembership.create(user_id: DemoUser.id, room_id: GeneralChannel.id)
WorkMembership = RoomMembership.create(user_id: DemoUser.id, room_id: WorkChannel.id)
HumorMembership = RoomMembership.create(user_id: DemoUser.id, room_id: HumorChannel.id)
DesignMembership = RoomMembership.create(user_id: DemoUser.id, room_id: DesignChannel.id)
SalesMembership = RoomMembership.create(user_id: DemoUser.id, room_id: SalesChannel.id)

(1..30).to_a.each do |num|
    USER_HASH[num] = User.create!(username: Faker::HarryPotter.unique.character, email: Faker::HarryPotter.unique.character, password: 'guestpassword')
end

USER_HASH.each do |k,v|
    RoomMembership.create(user_id: v.id, room_id: GeneralChannel.id)
    RoomMembership.create(user_id: v.id, room_id: WorkChannel.id)
    RoomMembership.create(user_id: v.id, room_id: HumorChannel.id)
    RoomMembership.create(user_id: v.id, room_id: DesignChannel.id)
    RoomMembership.create(user_id: v.id, room_id: SalesChannel.id)
    Message.create(user_id: v.id, 
        body: Faker::HarryPotter.quote,
        room_id: GeneralChannel.id)
    Message.create(user_id: v.id, 
        body: Faker::HarryPotter.quote,
        room_id: SalesChannel.id) 
    Message.create(user_id: v.id, 
        body: Faker::HarryPotter.quote,
        room_id: DesignChannel.id)
    Message.create(user_id: v.id, 
        body: Faker::HarryPotter.quote,
        room_id: DesignChannel.id)
    Message.create(user_id: v.id, 
        body: Faker::HarryPotter.quote,
        room_id: HumorChannel.id)
    Message.create(user_id: v.id, 
        body: Faker::HarryPotter.quote,
        room_id: WorkChannel.id)
    Message.create(user_id: v.id, 
        body: Faker::HarryPotter.quote,
        room_id: WorkChannel.id)
end
    
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('rooms')
ActiveRecord::Base.connection.reset_pk_sequence!('messages')
ActiveRecord::Base.connection.reset_pk_sequence!('room_memberships')