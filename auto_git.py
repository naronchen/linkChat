import re
import subprocess
import shutil


with open("todo.md", "r") as f_current, open("todo_prev.md", "r") as f_prev:
    lines_current = f_current.readlines()
    lines_prev = f_prev.readlines()

new_checked_items = set(lines_current) - set(lines_prev)

Emtpy = True

for line in new_checked_items:
    match = re.match(r'- \[x\] (.*)', line)
    if match:
        Empty = False
        action_item = match.group(1)
        print(f"working with {action_item}...")
        subprocess.run(["git", "add", "."])
        subprocess.run(["git", "commit", "-m", action_item])
        subprocess.run(["git", "push"])


if not Empty:
    print("Git Add, Commit & Push Succeeded!")


shutil.copy("todo.md", "todo_prev.md")
