grep -rEl --exclude=*/target/* --exclude=*/src-gen/* "0.3.1(.qualifier|-SNAPSHOT)" * | xargs sed -i "" "s/0.3.1/0.4.0/g"