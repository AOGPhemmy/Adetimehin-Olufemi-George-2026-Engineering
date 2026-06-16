# code here ...
# Author is Adetimehin Olufemi George...
# Every code here is original and it was written by me...
# Fibonacci seq...it prints 5 results on every line...


x = 1
y = 1

ph_li = []
isRestartCode = True

print()
print('==' * 30)
print('\t\t\t Welcome to Fibonacci Sequence Generator')
print('==' * 30)

while isRestartCode:
    user_input = input("Do you want to LAUNCH the program \n"
                       "Enter 'q' to quit or || 'y' to PROCEED >>>\n")
    if user_input == 'q':
        break
    elif user_input != 'y':
        print('Invalid Entry. ')
        user_input = input(" Enter 'y' to PROCEED || 'q' to QUIT >>>\n")
    # User can choose limit...how many fibonacci numbers he wants to see
    ph_limit = input(f'\nHOW many Fibonacci numbers do you want \nto see...type>>>\n')

    if not (ph_limit.isdigit()):
        print('This entry is INVALID.')
        ph_limit = input(f'How many numbers do you want to SEE...type...1 or more]\n...type>>>\n')

    while int(ph_limit) < 1:
        print('This entry is INVALID')
        ph_limit = input(f'How many numbers do you want to SEE...type...1 or more]\n...type>>>\n')

    print('-' * 40)
    print('\t\t Fibonnacci Sequence\n\n')
    x = 1
    y = 1
    for i in range(int(ph_limit)):
        z = x + y

        # appearance / display
        print(f'{z}\t\t', end = '')
        if (i + 1)%5 == 0:
            print('\n')

        x = y
        y = z


    print('\n', '-' * 40)

print('==' * 30)
print('\t\t\t Thank you for choosing our sequence generator')
print('==' * 30)
print()







