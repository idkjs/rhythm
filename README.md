# Rhythm

[![Build Status](https://dev.azure.com/decent-algorithms/rhythm/_apis/build/status/decent-algorithms.rhythm?branchName=master)](https://dev.azure.com/decent-algorithms/rhythm/_build/latest?definitionId=1?branchName=master)

Data Structures and Algorithms implemented in Reason

# Contributing

First install `esy`

```
npm install -g esy@next
```

Install (once, and when package.json changes)

```
esy install
```

Building / Testing

Need to export `RHYTHM_PROJECT_ROOT`
Im not sure what is expected here so went with

```sh
> export RHYTHM_PROJECT_ROOT=$PWD
> echo $RHYTHM_PROJECT_ROOT
/Users/mando/Github/rhythm
```
Then run
```
<!-- esy build && esy test -->
> esy dune exec tests-exe/TestsExe.exe
Running 6 test suites
 PASS  MutableArrayList
 PASS  Math
 PASS  Deque
 PASS  CamlList
 PASS  CamlArray
 PASS  BinarySearch

Test Suites: 0 failed, 6 passed, 6 total
Tests:       0 failed, 129 passed, 129 total
Time:        0.001s
```

Or use watcher for development

```
esy watch
```

