task :cron => :environment do
  if Time.now.day == 1
    Mailer.new_month_warning(ENV['USER_MAIL']).deliver
  end
end